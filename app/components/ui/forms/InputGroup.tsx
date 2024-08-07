import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
  description?: string;
  className?: string;
  right?: ReactNode;
}
export default function InputGroup({ title, description, icon, children, right }: Props) {
  return (
    <div className="space-y-3">
      {(title || right) && (
        <div className="flex items-center justify-between space-x-2">
          <h3 className="text-sm font-medium leading-3 text-gray-800">
            <div className="flex items-center space-x-1">
              {icon}
              <div>
                <span className=" font-light italic"></span> {title}
              </div>
            </div>
          </h3>
          {right}
        </div>
      )}
      {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
      <div className="rounded-md border border-gray-100 bg-white px-4 py-5 shadow">{children}</div>
    </div>
  );
}
