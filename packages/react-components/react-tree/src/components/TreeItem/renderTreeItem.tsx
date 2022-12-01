import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { TreeItemState, TreeItemSlots } from './TreeItem.types';

/**
 * Render the final JSX of TreeItem
 */
export const renderTreeItem_unstable = (state: TreeItemState) => {
  const { slots, slotProps } = getSlots<TreeItemSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {slots.expandIcon && <slots.expandIcon {...slotProps.expandIcon} />}
      {slots.iconBefore && <slots.iconBefore {...slotProps.iconBefore} />}
      {slotProps.root.children}
      {slots.iconAfter && <slots.iconAfter {...slotProps.iconAfter} />}
      {slots.actionIcon && <slots.actionIcon {...slotProps.actionIcon} />}
    </slots.root>
  );
};
