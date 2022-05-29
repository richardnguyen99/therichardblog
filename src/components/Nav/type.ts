/**
 * Type definitions for <Nav /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { ReactNode, Dispatch, SetStateAction } from "react";

type Position = {
  top: number;
  left: number;
  width: number;
  mounted: boolean;
};

export interface NavContextValue {
  activeTab: string;
  position?: Position;

  onToggleActiveTab?: (tab: string) => void;
  onUpdatePosition?: Dispatch<SetStateAction<Position>>;
}

export interface NavProps {
  children: ReactNode | ReactNode[];
  [key: string]: any;
}

export interface NavProviderProps extends NavProps {
  url?: string;
}

export interface NavTabProps extends NavProps {
  tab: string;
}
