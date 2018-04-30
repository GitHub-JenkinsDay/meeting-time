describe("Time formats", function() {
  it("sets the time format to 12hr format", function() {
    TimeFormats.set('12hr');
    expect(TimeFormats.CurrentTime).toBe('ddd h:mma')
    expect(TimeFormats.Time).toBe('ddd ha')
    expect(TimeFormats.NewDay).toBe('ddd Do MMM')
    expect(TimeFormats.TimePlusThirty).toBe('ddd h:[30]a')
    expect(TimeFormats.Midday).toBe('ddd [Midday]')
    expect(TimeFormats.TimeForList).toBe('h:mma')
  });

  it("sets the time format to 24hr format", function() {
    TimeFormats.set('24hr');
    expect(TimeFormats.CurrentTime).toBe('ddd HH:mm')
    expect(TimeFormats.Time).toBe('ddd HH[:00]')
    expect(TimeFormats.NewDay).toBe('ddd DD/MM')
    expect(TimeFormats.TimePlusThirty).toBe('ddd HH[:30]')
    expect(TimeFormats.Midday).toBe('ddd HH[:00]')
    expect(TimeFormats.TimeForList).toBe('HH:mm')
  });
});
