import React from 'react';
import DateFooter from '../base/Footer';
import type { DatePanelProps } from './DatePanel';
import type { TdDatePickerProps, TdDateRangePickerProps, DateValue } from '../type';

export interface ExtraContentProps
  extends Pick<DatePanelProps, 'enableTimePicker' | 'presetsPlacement' | 'onPresetClick' | 'onConfirmClick'> {
  selectedValue?: DateValue;
  presets?: TdDatePickerProps['presets'] | TdDateRangePickerProps['presets'];
}

export default function ExtraContent(props: ExtraContentProps) {
  const { presets, enableTimePicker, presetsPlacement, onPresetClick, onConfirmClick, selectedValue } = props;

  const showPanelFooter = enableTimePicker || presets;

  return showPanelFooter ? (
    <DateFooter
      presets={presets}
      onPresetClick={onPresetClick}
      enableTimePicker={enableTimePicker}
      onConfirmClick={onConfirmClick}
      presetsPlacement={presetsPlacement}
      selectedValue={selectedValue}
    />
  ) : null;
}
