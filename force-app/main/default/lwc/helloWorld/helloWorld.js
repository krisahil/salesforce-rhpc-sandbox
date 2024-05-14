import { LightningElement, api } from 'lwc';
import { loadStyle, loadScript } from "lightning/platformResourceLoader";
// This is a .zip file containing some elements from ux.redhat.com repo. It's this folder zipped up:
// https://gitlab.cee.redhat.com/dxp/dat/modules/red_hat_shared_libs/-/tree/1.6.0/dist
import rhsl from '@salesforce/resourceUrl/red_hat_shared_libs_dist';
// We're using require.js because we're trying to use the UMD versions of the web components JS.
// We'd rather use es6 module imports; see below for why those aren't working.
import requireJs from '@salesforce/resourceUrl/require_js';

// When I try to import these as es6 modules, I get this error when I try to deploy (`sf project deploy start --target-org=rhpchelloworld`):
// Error: `Invalid reference red_hat_shared_libs_dist/dist/@cpelements/pfe-navigation/dist/pfe-navigation.js of type resourceUrl in file helloWorld.js`
// import pfeNav from '@salesforce/resourceUrl/red_hat_shared_libs_dist/dist/@cpelements/pfe-navigation/dist/pfe-navigation.js';
// import pfeIcon from '@salesforce/resourceUrl/red_hat_shared_libs_dist/dist/@patternfly/pfe-icon/dist/pfe-icon.js';

export default class HelloWorld extends LightningElement {
  @api name;

  renderedCallback() {

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

    loadScript(this, requireJs).then(() => {
      console.log('Loaded requirejs.');
      console.log('Now loading PFE-nav and its dependencies...');

      require([
        rhsl + '/dist/@cpelements/pfe-navigation/dist/pfe-navigation.umd.js',
        // The following assets should be auto-loaded by pfe-navigation.umd.js, but those requests fail
        // because SF requests them without ".js" extension. So, this code at least loads the code, but
        // the browser console still throws error because of the 404s. I have also tried loading these
        // first, but encountered similar problems.
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

}