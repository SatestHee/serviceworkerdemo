import { registerRoute } from 'workbox-routing/registerRoute';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';
import { ExpirationPlugin } from 'workbox-expiration';


registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg|webm)$/,
  new CacheFirst({
    cacheName: `images-local-v-${version}`,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

precacheAndRoute(self.__WB_MANIFEST);
