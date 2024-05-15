import { LightningElement, api } from 'lwc';
import { loadStyle, loadScript } from "lightning/platformResourceLoader";
// This is a .zip file containing some elements from ux.redhat.com repo. It's this folder zipped up:
// https://gitlab.cee.redhat.com/dxp/dat/modules/red_hat_shared_libs/-/tree/1.6.0/dist
import rhsl from '@salesforce/resourceUrl/red_hat_shared_libs_dist';
// This is a .zip file containing only a few elements from that repo, but all
// `import` statements have been removed, so that we can try to load them with
// `loadScript()`.
import rhsl_no_imports from '@salesforce/resourceUrl/red_hat_shared_libs_dist_no_imports';
// We're using require.js because we're trying to use the UMD versions of the
// web components JS.  We'd rather use es6 module imports; see below for why
// those aren't working.
// import requireJs from '@salesforce/resourceUrl/require_js';

// When I try to import these as es6 modules, I get this error when I try to
// deploy (`sf project deploy start --target-org=rhpchelloworld`):
// Error: `Invalid reference red_hat_shared_libs_dist/dist/@cpelements/pfe-navigation/dist/pfe-navigation.js of type resourceUrl in file helloWorld.js`
// import pfeNav from '@salesforce/resourceUrl/red_hat_shared_libs_dist/dist/@cpelements/pfe-navigation/dist/pfe-navigation.js';
// import pfeIcon from '@salesforce/resourceUrl/red_hat_shared_libs_dist/dist/@patternfly/pfe-icon/dist/pfe-icon.js';

// These are sibling LWCs to this one. Each one has been tweaked to import its
// dependencies from LWC's namespace (e.g., from `c/pfelement`);
// Source: https://www.npmjs.com/package/@patternfly/pfelement
import PFElement from 'c/pfelement';
// Source: https://www.npmjs.com/package/@patternfly/pfe-icon
import PfeIcon from 'c/pfe_icon';

export default class HelloWorld extends LightningElement {
  @api name;

  // Attempt #1)
  // This iteration is promising, but SF shows a modal with this error:
  // `[Cannot set properties of null (setting 'innerHTML')]`
  // This is caused by pfelement.js's call to `this.shadowRoot.innerHTML`
  // SF forces the shadow mode to "closed" on all LWCs, per
  // https://developer.salesforce.com/docs/platform/lwc/guide/create-dom.html,
  // which states: "LWS prevents you from breaking shadow DOM encapsulation by
  // enforcing a value of closed on the ShadowRoot's mode property for all
  // components."
  renderedCallback() {
    console.log('typeof pfelement next:', typeof PFElement);
    console.log('typeof pre-icon next:', typeof PfeIcon);
  }

  // Attempt #2)
  // This results in error message "[Unexpected token 'export']" (in SF
  // dialog).  While the `import` statements have been removed from these
  // scripts, they still call `export`. How else can they make their objects
  // available to other code?
  /*
  async connectedCallback() {
    try {
      await Promise.all([
        loadScript(this, rhsl_no_imports + '/@patternfly/pfelement/dist/pfelement.js'),
        loadScript(this, rhsl_no_imports + '/@patternfly/pfe-icon/dist/pfe-icon.js'),
        loadScript(this, rhsl_no_imports + '/@patternfly/pfe-avatar/dist/pfe-avatar.js'),
        loadScript(this, rhsl_no_imports + '/@cpelements/pfe-navigation/dist/pfe-navigation.js'),
      ]);
    }
    catch (e) {
      console.error(e);
    }
  }
  */

  // Attempt #3)
  // I tried to dynamically attach the module script. In this case, I see the
  // script requested in the browser tools, but I don't see calls to the other
  // modules that this module should be requesting. Browser console reports this
  // error:  Uncaught TypeError: Cannot read properties of null (reading
  // '$evaluator$')
  /*
  renderedCallback() {
    const script = document.createElement('script');
    script.setAttribute('type', 'module');
    script.setAttribute('src', rhsl + '/dist/@cpelements/pfe-navigation/dist/pfe-navigation.js');

    this.template.appendChild(script);
  }
  */

  // Attempt #4)
  // Using loadScript() to require a module file leads to error [Cannot use
  // import statement outside a module]. This first file try to load in
  // loadScript() tries to import other modules.
  /*
  async renderedCallback() {

    try {
      await Promise.all([
        loadScript(this, rhsl + '/dist/@cpelements/pfe-navigation/dist/pfe-navigation.js'),
        loadScript(this, rhsl + '/dist/@patternfly/pfe-cta/dist/pfe-cta.min.js'),
        loadScript(this, rhsl + '/dist/@patternfly/pfe-avatar/dist/pfe-avatar.js'),
        loadScript(this, rhsl + '/dist/@cpelements/rh-site-switcher/dist/site-switcher.min.js'),
      ]);
      
      // This builds the DOM for the web component. I'd prefer to declare this in
      // the HTML file, but SF complains about the custom tag. The goal is something
      // like this:
      // <pfe-navigation><nav><ul>links...</ul></nav></pfe-navigation>
      // For real-world example markup, see https://connect.redhat.com/en/api/chrome/rh-universal-nav-header?is_demo=true.
      const container = this.template.querySelector('.js-pfe-nav-container');
      if (container) {
        const pfeNav = document.createElement('pfe-navigation');
        pfeNav.id = 'pfe-navigation';

        const nav = document.createElement('nav');
        nav.classList.add('pfe-navigation');
        pfeNav.appendChild(nav);

        container.appendChild(pfeNav);
      }
      else {
        console.log('missing element ".js-pfe-nav-container" (in renderedCallback)');
      }

    }
    catch (error) {
      console.error(error);
    }
  }
  */

  // Attempt #5)
  // Tries to load dependencies using require.js.  The dependencies following
  // pfe-navigation.umd.js should have been auto-loaded by
  // pfe-navigation.umd.js, but those requests fail because SF requests them
  // without ".js" extension. So, this code at least loads the code, but the
  // browser console still throws error because of the 404s. I have also tried
  // loading these first, but encountered similar problems.
  /*
  renderedCallback() {
    loadScript(this, requireJs).then(() => {
      console.log('Loaded requirejs.');
      console.log('Now loading PFE-nav and its dependencies...');

      require([
        rhsl + '/dist/@cpelements/pfe-navigation/dist/pfe-navigation.umd.js',
        rhsl + '/dist/@patternfly/pfelement/dist/pfelement.umd.js',
        rhsl + '/dist/@patternfly/pfe-icon/dist/pfe-icon.umd.js',
        rhsl + '/dist/@patternfly/pfe-avatar/dist/pfe-avatar.umd.js',
      ], function(pfeNav) {
        console.log('pfeNav loaded (UMD version)');
        if (window.customElements.get('pfe-navigation')) {
          console.log('Found the web component in registry: <pfe-navigtation>');
        }
        else {
          console.error('Did not find "pfe-navigation" in window.customElements registry');
        }
      });
    });
  }
  */

}