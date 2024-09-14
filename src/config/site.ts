export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Ingenious Table",
  description:
    "CampEd table component with server side sorting, pagination, and filtering",
  mainNav: [
    {
      title: "Client-Controlled",
      href: "/",
    },
    {
      title: "Server-Controlled",
      href: "/server-controlled",
    },
  ],
}