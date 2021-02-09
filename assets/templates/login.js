export const login = `
<div class="container">
  <section class="hero">
    <h1 class="hero__heading"><%= title %></h1>
    <img class="hero__image" src="./assets/images/hero.svg" alt="Hero background image" />
    <a href="https://github.com/erq-programmer/purejs-form" class="hero__button"
      >Get started</a
    >
  </section>

  <main class="login">
    <img class="login__image" src="./assets/images/login.svg" alt="Login background image" />
    <form class="login__form" id="form">
      <label for="username" class="form__label">
        <input
          class="form__input"
          id="username"
          name="username"
          type="text"
          autocorrect="off"
          autocomplete="username"
          placeholder="&nbsp;"
        />
        <span class="label__text">Username</span>
        <span class="label__error">There are no errors!</span>
      </label>

      <label class="form__label" for="password">
        <input
          class="form__input"
          id="password"
          name="password"
          type="password"
          autocorrect="off"
          autocomplete="current-password"
          placeholder="&nbsp;"
        />
        <span class="label__text">Password</span>
        <button class="toggle-password" type="button" aria-label="Show password as plain text">Show</button>
        <span class="label__error">There are no errors!</span>
      </label>
      
      <button class="form__submit" type="submit">Login</button>
    </form>
  </main>
</div>
`;
