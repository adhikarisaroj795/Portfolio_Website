export interface SidebarItem {
  id: string;
  label: string;
  class: string;
}

// Create the sidebar items array
export const aboutUsSideBar: SidebarItem[] = [
  { id: "bio", label: "Bio", class: "folder-color1" },
  { id: "interest", label: "Interest", class: "folder-color2" },
  { id: "education", label: "Education", class: "folder-color3" },
  { id: "skills", label: "Skills", class: "folder-color4" },
  { id: "service", label: "Service", class: "folder-color5" },
  { id: "experience", label: "Experience", class: "folder-color6" },
];
