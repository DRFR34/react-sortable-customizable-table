# Changelog

## [2.0.0] - 2024-07-18

### New Features

- **Internal SVG Icons**:
  - Replaced the use of external icon libraries (such as `react-icons`) with custom SVG icons included directly within the component. This change reduces external dependencies and ensures consistent icon styling.

- **Date Format Customization**:
  - Introduced a new `dateFormat` prop, allowing users to specify the format for displaying dates in the table. Supported formats include 'yyyy-MM-dd', 'MM/dd/yyyy', 'dd/MM/yyyy', and more.

- **Enhanced Styling Options**:
  - Added new styling props:
    - `headerActiveBgColor`: Set the background color for the currently sorted column's header.
    - `headerActiveTextColor`: Set the text color for the currently sorted column's header.
    - `headerHoverBgColor`: Set the background color for column headers on hover.
    - `headerHoverTextColor`: Set the text color for column headers on hover.

- **Improved Sort Functionality**:
  - Enhanced the sorting mechanism with clearer visual indications when a column is sorted. The sorted column's header will now change color according to the `headerActiveBgColor` and `headerActiveTextColor` props.

### Breaking Changes

- **Removed External Icon Library Dependency**:
  - The dependency on `react-icons` has been removed. If you relied on these icons in your project, you will need to replace them with the new internal SVG icons or your own solution.

### Improvements

- **Code Simplification**:
  - Refactored component structure for better maintainability and performance.

- **Updated Documentation**:
  - The README has been updated to reflect the new features, props, and usage examples. Please refer to it for detailed information on how to use the new version.

### Migration Notes

To upgrade from v1 to v2, ensure that you:

1. Remove any usage of `react-icons` if you were customizing icons externally.
2. Update your usage of date formatting by setting the new `dateFormat` prop if needed.
3. Adjust any custom styles to accommodate the new and updated styling props.
