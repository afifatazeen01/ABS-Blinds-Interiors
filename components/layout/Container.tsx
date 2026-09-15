import { ReactNode } from "react";
import "./Container.css";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function Container({ children, className = "", as: Component = "div" }: ContainerProps) {
  return (
    <Component className={`container ${className}`}>
      {children}
    </Component>
  );
}
