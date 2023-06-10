import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food delivered to you</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </p>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. Many desktop
        publishing packages and web page editors now use Lorem Ipsum as their
        default model text, and a search for 'lorem ipsum' will uncover many web
        sites still in their infancy. Various versions have evolved over the
        years, sometimes by accident, sometimes on purpose (injected humour and
        the like).
      </p>
    </section>
  );
};

export default MealsSummary;
