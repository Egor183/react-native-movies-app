import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: string, params?: any): void => {
  navigationRef.current?.navigate(name as never, params as never);
};

export const goBack = () => {
  const ref = navigationRef.current;

  if (ref?.canGoBack()) {
    ref.goBack();
  }
};
