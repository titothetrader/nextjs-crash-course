import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>TitOrgyen</span> WebDev News
      </h1>
      <p className={headerStyles.description}>Stay up to date with the latest TitOrgyen News</p>
    </div>
  );
};

export default Header;
