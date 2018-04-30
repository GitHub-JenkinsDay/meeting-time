describe("Cookies", function() {
  beforeEach(function() {
  })

  it("can get the timeformat cookie", function() {
    document.cookie = "timeformat=test;";
    expect(Cookie.get()).toBe('test');
    document.cookie = "timeformat=test; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  });

  it("defaults to 12hr if there is no cookie set", function() {
    document.cookie = "timeformat=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    expect(Cookie.get()).toBe('12hr');
  });

  it("can set the timeformat cookie", function() {
    expect().toBe();
  });

  it("can switch the timeformat cookie", function() {
    expect().toBe();
  });
});
