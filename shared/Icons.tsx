import {
  IconArrowRight,
  IconBrandGithubFilled,
  IconCopy,
  IconExternalLink,
  IconLayoutSidebarLeftCollapseFilled,
  IconMail,
  IconMoon,
  IconPhoto,
  IconRss,
  IconSun,
  type TablerIconsProps,
} from "@tabler/icons-react";

export const Icons = {
  ArrowRight: (props: TablerIconsProps) => <IconArrowRight {...props} />,
  Copy: (props: TablerIconsProps) => <IconCopy {...props} />,
  External: (props: TablerIconsProps) => <IconExternalLink {...props} />,
  Github: (props: TablerIconsProps) => <IconBrandGithubFilled {...props} />,
  GithubAlt: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"
      />
    </svg>
  ),
  Image: (props: TablerIconsProps) => <IconPhoto {...props} />,
  Mail: (props: TablerIconsProps) => <IconMail {...props} />,
  Menu: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <rect x="1.75" y="2.75" width="14.5" height="12.5" rx="2" ry="2" />
        <line x1="4.75" y1="5.75" x2="4.75" y2="12.25" />
      </g>
    </svg>
  ),
  Moon: (props: TablerIconsProps) => <IconMoon {...props} />,
  Rss: (props: TablerIconsProps) => <IconRss {...props} />,
  SidebarCollapse: (props: TablerIconsProps) => (
    <IconLayoutSidebarLeftCollapseFilled {...props} />
  ),
  Sun: (props: TablerIconsProps) => <IconSun {...props} />,
};
