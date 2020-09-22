// This file is imported as a string thanks to babel-plugin-inline-import
import linkPressScript from './handle-link-press.webjs';
import { FeatureBuilder } from '@formidable-webview/webshell';

export interface LinkPressOptions {
  preventDefault?: boolean;
}

export interface LinkPressTarget {
  uri: string;
}

const defaultOptions: LinkPressOptions = {
  preventDefault: true
};

export const HandleLinkPressFeature = new FeatureBuilder({
  defaultOptions,
  script: linkPressScript,
  featureIdentifier: 'org.myorg/webshell.link-press',
  className: 'HandleLinkPressFeature'
})
  .withEventHandlerProp<LinkPressTarget, 'onDOMLinkPress'>('onDOMLinkPress')
  .build();
