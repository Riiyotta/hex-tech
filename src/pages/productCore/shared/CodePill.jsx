// product §2.2 N3 CodePill (cli, context-studio): inline monospace token.
// inline / mx .06em / padding .15em .45em .12em / IBM Plex Mono 500 .92em/1.35 / radius 3 / 1px --grid500 /
// highlight 10% fill / --fontColorDEFAULT / nowrap. Styles: productCore.css (.pc-code-pill).
export default function CodePill({ children }) {
  return <span className="pc-code-pill">{children}</span>
}
