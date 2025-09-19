/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/GoogleSignIn` | `/NoteCard` | `/ProfileScreen` | `/TaskList` | `/_sitemap` | `/home` | `/home/archive` | `/home/createNewLabel` | `/home/helpFeedback` | `/home/homePage` | `/home/reminders` | `/home/settings` | `/home/trash`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
