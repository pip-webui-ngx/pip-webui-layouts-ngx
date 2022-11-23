# <img src="https://github.com/pip-webui/pip-webui/raw/master/doc/Logo.png" alt="Pip.WebUI Logo" style="max-width:30%"> <br/> Responsive content layouts

![](https://img.shields.io/badge/license-MIT-blue.svg)

Development responsible applications requires to organization content the way that can fit available screen from small phones to large desktops. In Line-of-Business applications with tens screens and dialogs implementaing responsive layouts can be time consuming and error prone task. To make it more productive Pip.WebUI.Layouts module provides a set of universal responsible layouts that can help to organize content in number of different ways: as full-screen content, documents, tiles, dialogs and more.

### The structural parts of the application page

**App bar** is a special kind of toolbar that’s used for branding, navigation, search, and actions.

**Side nav** is left side panel that shows ideally navigation- or identity-based content. 

**Right nav** is right side panel that should show secondary content to the main content on a page.

#### Mobile structure

<a href="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/mobile_layout.png" style="display: block">
    <img src="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/mobile_layout.png"/>
</a>

**Note that** root layout has no paddings.

**Real example** with closed sidenav and rightnav.

<a href="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/mobile_layout_screenshot.png" style="display: block; max-width: 512px">
    <img src="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/mobile_layout_screenshot.png"/>
</a>

#### Phablet structure

<a href="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/fablet_layout.png" style="display: block">
    <img src="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/fablet_layout.png"/>
</a>

**Real example** with closed rightnav.

<a href="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/fablet_layout_screenshot.png" style="display: block; max-width: 700px">
    <img src="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/fablet_layout_screenshot.png"/>
</a>

#### Tablet structure

##### Tablet structure with expanded side nav

<a href="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/tablet_layout_opened.png" style="display: block">
    <img src="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/tablet_layout_opened.png"/>
</a>

##### Tablet structure with not expanded side nav

<a href="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/tablet_layout_closed.png" style="display: block">
    <img src="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/tablet_layout_closed.png"/>
</a>

**Real example** with closed rightnav and expanded side nav.

<a href="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/tablet_layout_opened_screenshot.png" style="display: block; max-width: 1000px">
    <img src="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/tablet_layout_opened_screenshot.png"/>
</a>

#### Desktop structure

<a href="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/desktop_layout.png" style="display: block">
    <img src="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/desktop_layout.png"/>
</a>

**Real example** with closed rightnav.

<a href="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/desktop_layout_screenshot.png" style="display: block;">
    <img src="https://github.com/pip-webui2/pip-webui2-layouts/raw/master/doc/images/desktop_layout_screenshot.png"/>
</a>

### Layouts

**Root layout** is root component that contains floating side nav, right nav and root content. Root content contains appbar and main layout.

**Main layout** contains fixed sidenav and main content. Main content is placed under app bar, beetween side nav and right nav.

**Main layout (alt)** new version of layout with universal sidenav for both desctop and mobile versions.

**Card layout** places small content at the center of the screen in a card. On phones the content is extended to the whole screen.

**Document layout** places content as a document with fixed width and full height centered on the screen. On tables and phones the content occupies the whole screen.

**Tiles layout** is used to present multiple items in tiles that arranged on the screen in one or several columns.

**Menu layout** combines menu that adds on the left hand side to switch between documents and **Document layout**, **Tile layout**. On phones the menu occupies the entire screen and user switches between menu and document back and forth. 

**Scrollable layout** provides container for elements and makes inclusions scrollable or not scrollable.

### Services

**Media** is used to evaluate whether a given media query is true or false given the current size of layout internal part. 
Internal part consist of **main layout** and its width calculated without including side nav and right nav.

**Layouts** serves to control **app bar**, **side nav**, **right nav**.

## Installation

To install this module using npm:

```bash
npm install pip-webui2-layouts --save
```

## Using

##### Structure of application using layouts:

```html
<pip-root-layout>
  <pip-sidenav-floating >
    <!-- Side nav content of application is here -->
  </pip-sidenav-floating>
  <pip-rightnav-floating >
    <!-- Right nav content of application is here -->
  </pip-rightnav-floating>
  <pip-root-content>
    <pip-appbar >
      <!-- App bar content of application is here -->
    </pip-appbar>
    <pip-main-layout >
      <pip-sidenav-fixed >
        <pip-sidenav-expander></pip-sidenav-expander>
        <!-- Side nav content of application is here -->
      </pip-sidenav-fixed>
      <pip-main-content>
        <!-- Main content of application is here -->
         <!-- Shadows -->
         <pip-shadow visible="true" attachmentSide="left"></pip-shadow>
         <pip-shadow visible="true" attachmentSide="right"></pip-shadow>
         <!-- For example using document layout -->
         <pip-document-layout toolbar="true">
            <pip-document-content>
                <!-- Document content here -->
            </pip-document-content>
            <pip-document-footer >
                <!-- Document footer here -->
            </pip-document-footer>
         </pip-document-layout>
      </pip-main-content>
    </pip-main-layout>
  </pip-root-content>
</pip-root-layout>
```

Alternative using with new sidenav:

```html
<pip-root-layout>
  <pip-rightnav-floating >
    <!-- Right nav content of application is here -->
  </pip-rightnav-floating>
  <pip-root-content>
    <pip-appbar >
      <!-- App bar content of application is here -->
    </pip-appbar>
    <pip-main-layout-alt >
      <pip-sidenav >
        <pip-sidenav-expander></pip-sidenav-expander>
        <!-- Side nav content of application is here -->
      </pip-sidenav>
      <pip-main-content>
        <!-- Main content of application is here -->
         <!-- Shadows -->
         <pip-shadow visible="true" attachmentSide="left"></pip-shadow>
         <pip-shadow visible="true" attachmentSide="right"></pip-shadow>
         <!-- For example using document layout -->
         <pip-document-layout toolbar="true">
            <pip-document-content>
                <!-- Document content here -->
            </pip-document-content>
            <pip-document-footer >
                <!-- Document footer here -->
            </pip-document-footer>
         </pip-document-layout>
      </pip-main-content>
    </pip-main-layout>
  </pip-root-content>
</pip-root-layout>
```

##### Media service (subscribe on main part width changing)

```typescript
this.media.asObservableMain().subscribe((change: MediaMainChange) => {
      // Do anything...
      // MediaMainChange contains aliases - string array of active at this moment media query aliases
});
```

##### Media service in template (add media service to component before)

```html
<div *ngIf="media.isMainActive('lt-sm')">
    <!-- Show current div only for phablet and mobile -->
</div>
```

##### Media queries in styles

In component's styles:
```css
::ng-deep .pip-xs .xs-black {
    background: black;
}
```

In component's template:
```html
<div class="xs-black">
    <!-- Black background on mobile screen -->
</div>
```

## <a name="license"></a>License

This module is released under [MIT license](License) and totally free for commercial and non-commercial use.
