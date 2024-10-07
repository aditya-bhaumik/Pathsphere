const componentsToBeLoaded = [];
const fetchComponent = async (componentName) => {
  try {
    const res = await fetch(
      `/components/${componentName}/${componentName}.html`
    );
    const html = await res.text();

    const parser = new DOMParser();

    const doc = parser.parseFromString(html, 'text/html');

    const components = doc.body.querySelectorAll('body > :not(script)') || [];

    const styles = doc.querySelectorAll('link[rel="stylesheet"], style') || [];

    const scripts = doc.querySelectorAll('script') || [];

    return [components, styles, scripts];
  } catch (e) {
    console.error(
      'error while fetching component, please check if the given name is correct',
      e
    );
  }
};

const prependComponent = async (
  componentName,
  targetElement = document.body
) => {
  componentsToBeLoaded.push(componentName);
  try {
    const [component, styles, scripts] = await fetchComponent(componentName);
    styles.forEach((style) => {
      document.head.appendChild(style);
    });

    component.forEach((element) => {
      while (!targetElement) {
        targetElement = document.body;
      }
      targetElement.prepend(element);
    });

    scripts.forEach((script) => {
      const scriptTag = document.createElement('script');
      scriptTag.src = script.src;
      document.body.appendChild(scriptTag);
    });
    componentsToBeLoaded.pop();
    console.log('Component loaded:', componentName);
  } catch (e) {
    console.error(
      'error while fetching component, please check if the given name is correct',
      e
    );
  }
};

const appendComponent = async (
  componentName,
  targetElement = document.body
) => {
  componentsToBeLoaded.push(componentName);
  const [component, styles, scripts] = await fetchComponent(componentName);

  styles.forEach((style) => {
    document.head.appendChild(style);
  });

  component.forEach((element) => {
    targetElement.appendChild(element);
  });

  scripts.forEach((script) => {
    const scriptTag = document.createElement('script');
    scriptTag.src = script.src;
    document.body.appendChild(scriptTag);
  });
  componentsToBeLoaded.pop();
};

const insertComponentBefore = async (
  componentName,
  BeforeElement = document.body
) => {
  componentsToBeLoaded.push(componentName);
  const [component, styles, scripts] = await fetchComponent(componentName);

  styles.forEach((style) => {
    document.head.appendChild(style);
  });

  component.forEach((element) => {
    BeforeElement.before(element);
  });

  scripts.forEach((script) => {
    const scriptTag = document.createElement('script');
    scriptTag.src = script.src;
    document.body.appendChild(scriptTag);
  });
  componentsToBeLoaded.pop();
};

const insertComponentAfter = async (
  componentName,
  AfterElement = document.body
) => {
  componentsToBeLoaded.push(componentName);
  const [component, styles, scripts] = await fetchComponent(componentName);

  styles.forEach((style) => {
    document.head.appendChild(style);
  });

  component.forEach((element) => {
    AfterElement.after(element);
  });

  scripts.forEach((script) => {
    const scriptTag = document.createElement('script');
    scriptTag.src = script.src;
    document.body.appendChild(scriptTag);
  });
  componentsToBeLoaded.pop();
};

const hideContent = () => {
  const bodyChildren = document.body.children;
  Array.from(bodyChildren).forEach((child) => {
    child.style.visibility = 'hidden'; // You can also use 'display: none' if needed
  });
};

const showContent = () => {
  const bodyChildren = document.body.children;
  Array.from(bodyChildren).forEach((child) => {
    child.style.visibility = 'visible'; // You can also use 'display: block' if needed
  });
};

const waitTillComponentsLoaded = async () => {
  while (componentsToBeLoaded.length > 0) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  const loadingScreen = document.getElementById('LoadingScreen');
  loadingScreen.classList.remove('loading');
  loadingScreen.classList.add('loaded');
  showContent();
};

document.addEventListener('DOMContentLoaded', hideContent);

console.log('Loading components...');

prependComponent('LoadingScreen');
prependComponent('GlobalStyles');
prependComponent('GlobalScripts');
