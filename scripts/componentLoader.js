const componentsToBeLoaded = new Set();
const styles = new Set();
const scripts = new Set();

const fetchComponent = async (componentName) => {
  try {
    const res = await fetch(`/components/${componentName}/${componentName}.html`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const html = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const components = Array.from(doc.body.children);
    const stylesToLoad = doc.querySelectorAll('link[rel="stylesheet"], style');
    const scriptsToLoad = doc.querySelectorAll('script');

    return [components, stylesToLoad, scriptsToLoad];
  } catch (e) {
    console.error('Error while fetching component:', e);
  }
};

const prepareAndInjectAssets = (assets, assetSet, isStyle = true) => {
  assets.forEach((asset) => {
    const href = isStyle ? asset.href : asset.src;
    const innerContent = isStyle ? asset.innerHTML : asset.innerHTML;

    if (!href && !innerContent) return; // Skip if both are empty

    if (!assetSet.has(href || innerContent)) {
      assetSet.add(href || innerContent);
      document.head.appendChild(asset.cloneNode(true)); // Clone to avoid removing original
    }
  });
};

const insertComponent = async (componentName, insertMethod, targetElement = document.body) => {
  componentsToBeLoaded.add(componentName);

  const [component, stylesToLoad, scriptsToLoad] = await fetchComponent(componentName);
  prepareAndInjectAssets(stylesToLoad, styles, true);
  prepareAndInjectAssets(scriptsToLoad, scripts, false);

  component.forEach((element) => {
    targetElement[insertMethod](element);
  });

  componentsToBeLoaded.delete(componentName);
  console.log('Component loaded:', componentName);
};

const showContent = async () => {
  const loadingScreen = document.getElementById('LoadingScreen');
  loadingScreen.classList.remove('loading');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  loadingScreen.classList.add('loaded');
};

const waitTillComponentsLoaded = async (callback = showContent) => {
  while (componentsToBeLoaded.size > 0) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  for (const script of scripts) {
    const newScript = document.createElement('script');
    if (script.src) {
      newScript.src = script.src;
    } else {
      newScript.innerHTML = script.innerHTML;
    }
    document.body.appendChild(newScript);
  }

  callback();
};

const loadLoadingScreen = async () => {
  await insertComponent('LoadingScreen', 'prepend');
  await waitTillComponentsLoaded(() => {});
  document.body.style.visibility = 'visible';
};

const init = async () => {
  while (!document.body) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  await loadLoadingScreen();
  console.log('Loading components...');
  await insertComponent('GlobalStyles', 'prepend');
  await insertComponent('GlobalScripts', 'prepend');
};

init();
