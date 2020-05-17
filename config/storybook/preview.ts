import Vue from 'vue';
import { setConsoleOptions } from '@storybook/addon-console';

function register() {
  const files = require.context('./', true, /\.vue$/i);
  files
    .keys()
    .map(key => Vue.component((key.split('/').pop() || '').split('.')[0], files(key).default));
}

// Vue 컴포넌트를 자동으로 등록
register();

setConsoleOptions({
  panelExclude: []
});
