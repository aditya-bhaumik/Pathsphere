const componentsToBeLoaded = [];
const styles = [];
const scripts = [];

const fetchComponent = async (componentName) => {
  try {
    // fetch content from server
    const res = await fetch(
      `/components/${componentName}/${componentName}.html`
    );

    // Check if the response is OK
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    // parse content
    const html = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Select components, styles, and scripts from the fetched HTML
    const components = doc.body.querySelectorAll('body > :not(script)') || [];
    const styles = doc.querySelectorAll('link[rel="stylesheet"], style') || [];
    const scripts = doc.querySelectorAll('script') || [];

    // return component, styles and scripts
    return [components, styles, scripts];
  } catch (e) {
    console.error(
      'Error while fetching component, please check if the given name is correct',
      e
    );
  }
};

const prepareComponent = async (stylesToLoad, scriptsToLoad) => {
  // iterate through styles to be loaded
  stylesToLoad.forEach((style) => {
    // get the href
    const href = style.href;
    // get the innerstyle
    const innerStyle = style.innerHTML;
    // if its empty then its redundant no need to inject
    if (!href && !innerStyle) return;

    // if the same content exists in the lists then dont add it to list
    if (
      (href && styles.find((s) => s.href === href)) ||
      (innerStyle && styles.find((s) => s.innerHTML === innerStyle))
    )
      return;
    // add style to html. this is done to avoid styles not loading properly
    document.head.appendChild(style);
  });

  //  iterate through scripts to be loaded
  scriptsToLoad.forEach((script) => {
    // get the innerHTML
    const innerScript = script.innerHTML;
    //  get the src
    const src = script.src;

    // if its empty then its redundant no need to inject
    if (!innerScript && !src) return;

    // if the same content exists in the lists then dont add it to list
    if (
      (innerScript && scripts.find((s) => s.innerHTML === innerScript)) ||
      (src && scripts.find((s) => s.src === src))
    )
      return;
    // push to scripts list. its not injected directly right now to avoid loading scripts before all the html content is loaded
    scripts.push(script);
  });
};

const prependComponent = async (
  componentName,
  targetElement = document.body
) => {
  componentsToBeLoaded.push(componentName);
  try {
    const [component, styles, scripts] = await fetchComponent(componentName);
    prepareComponent(styles, scripts);
    component.forEach((element) => {
      while (!targetElement) {
        targetElement = document.body;
      }
      targetElement.prepend(element);
    });
  } catch (e) {
    console.error(
      'error while fetching component, please check if the given name is correct',
      e
    );
  }
  componentsToBeLoaded.pop();
  console.log('Component loaded:', componentName);
};

const appendComponent = async (
  componentName,
  targetElement = document.body
) => {
  componentsToBeLoaded.push(componentName);
  const [component, styles, scripts] = await fetchComponent(componentName);

  prepareComponent(styles, scripts);

  component.forEach((element) => {
    targetElement.appendChild(element);
  });

  componentsToBeLoaded.pop();
  console.log('Component loaded:', componentName);
};

const insertComponentBefore = async (
  componentName,
  BeforeElement = document.body
) => {
  componentsToBeLoaded.push(componentName);
  const [component, styles, scripts] = await fetchComponent(componentName);

  prepareComponent(styles, scripts);

  component.forEach((element) => {
    BeforeElement.before(element);
  });

  componentsToBeLoaded.pop();
  console.log('Component loaded:', componentName);
};

const insertComponentAfter = async (
  componentName,
  AfterElement = document.body
) => {
  componentsToBeLoaded.push(componentName);
  const [component, styles, scripts] = await fetchComponent(componentName);

  prepareComponent(styles, scripts);

  component.forEach((element) => {
    AfterElement.after(element);
  });

  componentsToBeLoaded.pop();
  console.log('Component loaded:', componentName);
};

const hideContent = () => {
  // make body children invisible
  const bodyChildren = document.body.children;
  Array.from(bodyChildren).forEach((child) => {
    child.style.visibility = 'hidden';
  });
};

const showContent = async () => {
  // remove loading screen
  const loadingScreen = document.getElementById('LoadingScreen');
  loadingScreen.classList.remove('loading');
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  loadingScreen.classList.add('loaded');

  // show body content
  const bodyChildren = document.body.children;
  Array.from(bodyChildren).forEach((child) => {
    child.style.visibility = 'visible';
  });
};

const waitTillComponentsLoaded = async (callback = showContent) => {
  // wait till all components are loaded
  while (componentsToBeLoaded.length > 0) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  // ! commented because this method is deprecated
  // load styles and scripts
  // for (const style of styles) {
  //   document.head.appendChild(style);
  //   console.log('Style loaded:', style);
  // }

  // load scripts
  for (const script of scripts) {
    const scriptTag = document.createElement('script');
    const innerScript = script.innerHTML;
    if (innerScript) {
      scriptTag.innerHTML = innerScript;
    } else {
      scriptTag.src = script.src;
    }
    await document.body.appendChild(scriptTag);
  }

  // call the callback by default show content
  callback();
};

const loadLoadingScreen = async () => {
  await prependComponent('LoadingScreen');
  document.body.style.display = '';
};

const init = async () => {
  // wait till body tag is loaded
  while (!document.body) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  // add loading screen
  await loadLoadingScreen();
  // complete mounting the loadingscreen
  await waitTillComponentsLoaded(() => {});

  console.log('Loading components...');

  await prependComponent('GlobalStyles');
  await prependComponent('GlobalScripts');
};

init();
