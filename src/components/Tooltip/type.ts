export interface ITooltipBase {
  title: string;
  position?: string;
}

export interface ITooltipWrapper extends ITooltipBase {
  children: JSX.Element;
}

export interface ITooltipModalProps extends ITooltipBase {
  id: string;
}

type CreateTooltipReturn = () => void;
export type CreateTooltipFunc = (
  params: ITooltipModalProps
) => CreateTooltipReturn;
