export interface NavbarItemType {
  label: string;
  href: string;
  isDropDown: boolean;
  dropDownData?:Array<NavbarItemType>;
}

export const NavbarArray: Array<NavbarItemType> = [
  {
    label: "Female",
    href: "/female/female",
    isDropDown:false,
    dropDownData: [
      {
        label: "Dresses",
        href: "/female/dresses",
        isDropDown:false,
      },
      {
        label: "T Shirts",
        href: "/female/t-shirts",
        isDropDown:false,
      },
      {
        label: "Pants",
        href: "/female/pants",
        isDropDown:false,
      },
      {
        label: "Jackets",
        href: "/female/jackets",
        isDropDown:false,
      },
      {
        label: "Sweaters",
        href: "/female/sweaters",
        isDropDown:false,
      },
    ],
  },
  {
    label: "Male",
    href: "/male/male",
    isDropDown: false,
    dropDownData: [
      {
        label: "Sweater",
        href: "/female/sweater",
        isDropDown:false,
      },
      {
        label: "Jackets",
        href: "/male/jackets",
        isDropDown:false,
      },
    ],
  },
  {
    label: "Kids",
    href: "/kids",
    isDropDown: false,
  },
  {
    label: "All Products",
    href: "/allproducts",
    isDropDown: false,
  },
];
