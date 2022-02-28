import "../../SCSS/Components/_mostPopular.scss";

export default function PopularArticle({ id, categories, title }) {
  return (
    <>
      <div className="line"></div>
      <div className="desc">
        <span className="id">#{id}</span>
        <span className="categories">{categories}</span>
      </div>

      <h1 className="title">{title}</h1>
    </>
  );
}
