describe("URL parsing", function() {
  it("defaults to Alderaan and Hoth", function() {
    expect(Url.get()).toBe('alderaan/hoth/');
  });

  it("allows allows you to add a city to the url", function() {
    Url.set(Url.defaultCities);

    Url.addCity('naboo');
    expect(Url.get()).toBe(Url.defaultCities + "naboo/");
  });

  it("allows allows you to remove a city form the url", function() {
    Url.set(Url.defaultCities);

    Url.addCity('naboo');
    expect(Url.get()).toBe(Url.defaultCities + "naboo/");

    Url.removeCity('naboo');
    expect(Url.get()).toBe(Url.defaultCities);
  });

  it("can fetch location.hash without hash", function() {
    Url.set("naboo/endor/");
    expect(Url.get()).toBe('naboo/endor/')
  });

  it("sets urlCities on load", function() {
    expect(urlCities).toContain('alderaan');
  });
});
