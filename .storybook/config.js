import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import 'antd/dist/antd.less'

setOptions({
  sortStoriesByKind: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: true,
  addonPanelInRight: false,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  sidebarAnimations: false,
});

const req = require.context('../stories/', true, /\.story\.tsx?$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};

configure(loadStories, module);
