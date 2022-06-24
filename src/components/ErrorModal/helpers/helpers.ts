import { MOVIES_STACK_ROUTES } from '@src/constants/routes.constants';
import { NAVIGATORS } from '@src/constants/routes.constants';
import { navigate } from '@src/modules/Navigation/actions';

export const handleGoToHomeScreen = () => {
  navigate(NAVIGATORS.MOVIES_NAVIGATOR, { screen: MOVIES_STACK_ROUTES.MOVIES });
};
