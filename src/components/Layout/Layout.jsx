
// shared layout for all pages
function Layout({className,...props}) {
  return (
    <div id="Layout" className={className}>
      {props.children}
    </div>
  );
}

export default Layout;
