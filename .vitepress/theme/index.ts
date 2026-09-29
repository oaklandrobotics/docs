import DefaultTheme from 'vitepress/theme';
import './custom.css'

import { h } from "vue";
import PreviewBanner from "./PreviewBanner.vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(PreviewBanner)
    })
  }
}