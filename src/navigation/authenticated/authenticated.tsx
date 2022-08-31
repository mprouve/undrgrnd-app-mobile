import { lightTheme, darkTheme } from '../../res/theme/theme'
import AuthenticatedStack from './stacks/stacks'
import Feed from '../../screens/feed/feed'
import Explore from '../../screens/explore/explore'
import Profile from '../../screens/profile/profile'
import Crowned from '../../screens/crowned/crowned'
import Events from '../../screens/events/events'
import Search from '../../screens/search/search'
import Event from '../../screens/event/event'
import Followers from '../../screens/followers/followers'
import Following from '../../screens/following/following'
import Location from '../../screens/location/location'
import ViewPost from '../../screens/view-post/view-post'
import CreatePostSelection from '../../screens/create-post-selection/create-post-selection'
import CreatePostForm from '../../screens/create-post-form/create-post-form'
import Settings from '../../screens/settings/settings'
import Notifications from '../../screens/notifications/notifications'

export const AuthenticatedNavigation = (): JSX.Element => {
  const theme = 'dark'

  return (
    <AuthenticatedStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor:
            theme === 'light'
              ? lightTheme.colors.background.header
              : darkTheme.colors.background.header
        },
        headerTitleStyle: {
          color: theme === 'light' ? lightTheme.colors.text.body : darkTheme.colors.text.body
        }
      }}>
      <AuthenticatedStack.Screen name="feed" component={Feed} options={{ title: 'Feed' }} />
      <AuthenticatedStack.Screen
        name="explore"
        component={Explore}
        options={{ title: 'Explore' }}
      />
      <AuthenticatedStack.Screen
        name="profile"
        component={Profile}
        options={{ title: 'Profile' }}
      />
      <AuthenticatedStack.Screen
        name="crowned"
        component={Crowned}
        options={{ title: 'Crowned' }}
      />
      <AuthenticatedStack.Screen name="events" component={Events} options={{ title: 'Events' }} />
      <AuthenticatedStack.Screen name="search" component={Search} options={{ title: 'Search' }} />
      <AuthenticatedStack.Screen name="event" component={Event} options={{ title: 'Event' }} />
      <AuthenticatedStack.Screen
        name="followers"
        component={Followers}
        options={{ title: 'Followers' }}
      />
      <AuthenticatedStack.Screen
        name="following"
        component={Following}
        options={{ title: 'Following' }}
      />
      <AuthenticatedStack.Screen
        name="location"
        component={Location}
        options={{ title: 'Location' }}
      />
      <AuthenticatedStack.Screen
        name="view_post"
        component={ViewPost}
        options={{ title: 'Post' }}
      />
      <AuthenticatedStack.Screen
        name="create_post_selection"
        component={CreatePostSelection}
        options={{ title: 'Create Post (Selection)' }}
      />
      <AuthenticatedStack.Screen
        name="create_post_form"
        component={CreatePostForm}
        options={{ title: 'Create Post (Form)' }}
      />
      <AuthenticatedStack.Screen
        name="settings"
        component={Settings}
        options={{ title: 'Settings' }}
      />
      <AuthenticatedStack.Screen
        name="notifications"
        component={Notifications}
        options={{ title: 'Notifications' }}
      />
    </AuthenticatedStack.Navigator>
  )
}

export default AuthenticatedNavigation
