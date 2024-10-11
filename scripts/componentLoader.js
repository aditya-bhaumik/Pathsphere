const fetchComponent = async (componentName) => {
  try {
    const res = await fetch(
      `/components/${componentName}/${componentName}.html`
    );

    // Check if the response is OK
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const html = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Select components, styles, and scripts from the fetched HTML
    const components = doc.body.querySelectorAll("body > :not(script)") || [];
    const styles = doc.querySelectorAll('link[rel="stylesheet"], style') || [];
    const scripts = doc.querySelectorAll("script") || [];

    return [components, styles, scripts];
  } catch (e) {
    console.error(
      "Error while fetching component, please check if the given name is correct",
      e
    );
  }
};

const prependComponent = async (
  componentName,
  targetElement = document.body
) => {
  const [component, styles, scripts] = await fetchComponent(componentName);

  styles.forEach((style) => {
    document.head.appendChild(style);
  });

  component.forEach((element) => {
    targetElement.prepend(element);
  });

  scripts.forEach((script) => {
    const scriptTag = document.createElement("script");
    scriptTag.src = script.src;
    document.body.appendChild(scriptTag);
  });
};

const appendComponent = async (
  componentName,
  targetElement = document.body
) => {
  const [component, styles, scripts] = await fetchComponent(componentName);

  styles.forEach((style) => {
    document.head.appendChild(style);
  });

  component.forEach((element) => {
    targetElement.appendChild(element);
  });

  scripts.forEach((script) => {
    const scriptTag = document.createElement("script");
    scriptTag.src = script.src;
    document.body.appendChild(scriptTag);
  });
};

const insertComponentBefore = async (
  componentName,
  BeforeElement = document.body
) => {
  const [component, styles, scripts] = await fetchComponent(componentName);

  styles.forEach((style) => {
    document.head.appendChild(style);
  });

  component.forEach((element) => {
    BeforeElement.before(element);
  });

  scripts.forEach((script) => {
    const scriptTag = document.createElement("script");
    scriptTag.src = script.src;
    document.body.appendChild(scriptTag);
  });
};

const insertComponentAfter = async (
  componentName,
  AfterElement = document.body
) => {
  const [component, styles, scripts] = await fetchComponent(componentName);

  styles.forEach((style) => {
    document.head.appendChild(style);
  });

  component.forEach((element) => {
    AfterElement.after(element);
  });

  scripts.forEach((script) => {
    const scriptTag = document.createElement("script");
    scriptTag.src = script.src;
    document.body.appendChild(scriptTag);
  });
};

// Optional: Export functions if you want to use them in other files
// export {
//   fetchComponent,
//   prependComponent,
//   appendComponent,
//   insertComponentBefore,
//   insertComponentAfter,
// };
