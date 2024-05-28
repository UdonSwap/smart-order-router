import { Protocol } from 'udonswap-router';
import { DAI_MODE, MixedRoute, USDC_MODE, V2Route, V3Route } from '../../../../../../build/main';
import { CachedRoute } from '../../../../../../src';
import { USDC_DAI, USDC_DAI_MEDIUM, WETH_DAI } from '../../../../../test-util/mock-data';

describe('CachedRoute', () => {
  it('creates an instance given a route object and percent', () => {
    const v3Route = new V3Route([USDC_DAI_MEDIUM], USDC_MODE, DAI_MODE);
    const cachedRoute = new CachedRoute({ route: v3Route, percent: 100 });

    expect(cachedRoute).toBeInstanceOf(CachedRoute<V3Route>);
  });

  describe('protocol obtained from route', () => {
    it('is correctly V3 when using V3Route', () => {
      const route = new V3Route([USDC_DAI_MEDIUM], USDC_MODE, DAI_MODE);
      const cachedRoute = new CachedRoute({ route: route, percent: 100 });

      expect(cachedRoute.protocol).toEqual(Protocol.V3);
    });

    it('is correctly V2 when using V2Route', () => {
      const route = new V2Route([USDC_DAI], USDC_MODE, DAI_MODE);
      const cachedRoute = new CachedRoute({ route: route, percent: 100 });

      expect(cachedRoute.protocol).toEqual(Protocol.V2);
    });

    it('is correctly MIXED when using MixedRoute', () => {
      const route = new MixedRoute([USDC_DAI_MEDIUM, WETH_DAI], USDC_MODE, DAI_MODE);
      const cachedRoute = new CachedRoute({ route: route, percent: 100 });

      expect(cachedRoute.protocol).toEqual(Protocol.MIXED);
    });
  });

  describe('#routePath', () => {
    it('is correctly returned when using V3Route', () => {
      const route = new V3Route([USDC_DAI_MEDIUM], USDC_MODE, DAI_MODE);
      const cachedRoute = new CachedRoute({ route: route, percent: 100 });

      expect(cachedRoute.routePath)
        .toEqual('[V3]0x22198B46C84Cf43831E65D32a9403A194D617a61/0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3/3000');
    });

    it('is correctly returned when using V2Route', () => {
      const route = new V2Route([USDC_DAI], USDC_MODE, DAI_MODE);
      const cachedRoute = new CachedRoute({ route: route, percent: 100 });

      expect(cachedRoute.routePath)
        .toEqual('[V2]0x22198B46C84Cf43831E65D32a9403A194D617a61/0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3');
    });

    it('is correctly returned when using MixedRoute', () => {
      const route = new MixedRoute([USDC_DAI_MEDIUM, WETH_DAI], USDC_MODE, DAI_MODE);
      const cachedRoute = new CachedRoute({ route: route, percent: 100 });

      expect(cachedRoute.routePath)
        .toEqual(
          '[V3]0x22198B46C84Cf43831E65D32a9403A194D617a61/0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3/3000->[V2]0x4200000000000000000000000000000000000006/0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3');
    });
  });

  describe('#routeId', () => {
    it('is correctly returned when using V3Route', () => {
      const route = new V3Route([USDC_DAI_MEDIUM], USDC_MODE, DAI_MODE);
      const cachedRoute = new CachedRoute({ route: route, percent: 100 });

      expect(cachedRoute.routeId).toEqual(610157808);
    });

    it('is correctly returned when using V2Route', () => {
      const route = new V2Route([USDC_DAI], USDC_MODE, DAI_MODE);
      const cachedRoute = new CachedRoute({ route: route, percent: 100 });

      expect(cachedRoute.routeId).toEqual(783252763);
    });

    it('is correctly returned when using MixedRoute', () => {
      const route = new MixedRoute([USDC_DAI_MEDIUM, WETH_DAI], USDC_MODE, DAI_MODE);
      const cachedRoute = new CachedRoute({ route: route, percent: 100 });

      expect(cachedRoute.routeId).toEqual(-882458629);
    });
  });
});
