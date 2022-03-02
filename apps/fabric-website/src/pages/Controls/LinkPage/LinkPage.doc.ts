import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { LinkPageProps as ExternalProps } from '@fluentui/react-examples/lib/office-ui-fabric-react/Link/Link.doc';
import { ISideRailLink } from '@uifabric/example-app-base/lib/index2';

const related: ISideRailLink[] = [
  { text: 'Web Link', url: '#/controls/web/link' },
  { text: 'macOS Link', url: '#/controls/mac/link' },
  { text: 'Cross-platform Link', url: '#/controls/cross/link' },
];
const componentUrl = 'https://github.com/microsoft/fluentui/tree/7.0/apps/fabric-website/src/pages/Controls/LinkPage';

export const LinkPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
  mac: {
    title: 'Link',
    fileNamePrefix: 'Link',
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/LinkPage/docs/mac/LinkOverview.md') as string,
    usage: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/LinkPage/docs/mac/LinkUsage.md') as string,
    related,
    componentUrl,
  },
  cross: {
    title: 'Link',
    fileNamePrefix: 'Link',
    overview: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/LinkPage/docs/cross/LinkOverview.md') as string,
    usage: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/LinkPage/docs/cross/LinkUsage.md') as string,
    related,
    componentUrl,
  },
};