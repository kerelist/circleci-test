var fs = require('fs');
var path = require('path');

var contentHtml = fs.readFileSync(`${path.join(__dirname, 'index.html')}`, 'utf8');

describe('ButtonClick', () => {
  beforeAll(async () => {
    await page.setContent(contentHtml);
    await page.click('#button'); 
  });

  it('should make text appear', async () => {
    const textStyle = await page.evaluate(() => {
      let style = document.getElementById('new-text').style.display;
      return style;
    })
    return textStyle === "block";
  })

});