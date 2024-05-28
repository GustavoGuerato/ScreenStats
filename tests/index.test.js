const puppeteer = require('puppeteer');

describe('Testando página HTML', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Página contém os elementos esperados e possui o conteúdo correto', async () => {
    await page.goto('caminho_do_seu_arquivo_html');

    // Verifica se o título da página é "Netflix Gallery"
    const title = await page.title();
    expect(title).toBe('Netflix Gallery');

    // Verifica se o elemento com ID "navbar" está presente
    const navbar = await page.$('#navbar');
    expect(navbar).toBeTruthy();

    // Verifica se a classe "menuIcon" está presente
    const menuIcon = await page.$('.menuIcon');
    expect(menuIcon).toBeTruthy();

    // Extrai e verifica o conteúdo do elemento com ID "section1"
    const section1Content = await page.evaluate(() => {
      const section = document.getElementById('section1');
      return section.innerText;
    });
    expect(section1Content).toContain('Top Filmes da semana');

    // Extrai e verifica o conteúdo de todos os elementos com a classe "item"
    const itemContents = await page.evaluate(() => {
      const items = document.querySelectorAll('.item');
      return Array.from(items, item => item.innerText);
    });
    expect(itemContents).toEqual(expect.arrayContaining([
      'UP',
      'Velozes e Furiosos',
      'Dinossauro',
      // Adicione mais itens conforme necessário
    ]));

    // Extrai e verifica o conteúdo do footer
    const footerContent = await page.evaluate(() => {
      const footer = document.querySelector('footer');
      return footer.innerText;
    });
    expect(footerContent).toContain('ScreenStats');
    expect(footerContent).toContain('2024');

    // Verifica se a imagem do UP tem um link associado
    const upImageLink = await page.evaluate(() => {
      const upImage = document.getElementById('upImage');
      return upImage.getAttribute('onclick');
    });
    expect(upImageLink).toContain('up.html');
  });
});
