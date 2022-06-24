import React, { useCallback } from 'react';
import TabBar from '@src/components/TabBar';

export const useTabBar = () => useCallback(() => <TabBar />, []);
