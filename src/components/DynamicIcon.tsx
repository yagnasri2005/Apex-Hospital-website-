import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({ name, className = 'w-5 h-5', size }: DynamicIconProps) {
  // Safe lookup for any Lucide icon
  const IconComponent = (Icons as any)[name];
  
  if (!IconComponent) {
    // Fallback to Activity icon if the name doesn't match
    const DefaultIcon = Icons.Activity;
    return <DefaultIcon className={className} size={size} />;
  }
  
  return <IconComponent className={className} size={size} />;
}
