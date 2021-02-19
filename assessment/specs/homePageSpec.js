import homePage from '../pages/homePage'

describe('Search', () => {
  beforeEach(() => {
    homePage.goto()
  })

  it('should display 5 genres in row 1', () => {
    homePage.genre().should('have.length', 5)
  })

  it('should display 5 buttons on content rating', () => {
    homePage.genre().should('have.length', 5)
  })

  it('Parent of genre and content ratings should not be same', () => {
    homePage.genre().parent().should('to.not.equal', homePage.contentRating().parent());
  })

  it('Sort by view count is not clickable on page load', () => {
    homePage.viewCount().should('not.to.be.selected');
  })

  it('Sort by upload date should be selected on page load', () => {
    homePage.releaseDate().should('to.be.selected');
  })

  it('When you click on sort by, view-count option becomes clickable and selectable', () => {
    homePage.sortBy().select("viewCount");
    homePage.viewCount().should('to.be.selected');
  })

  it('Make sure to have upload button on the page on load', () => {
    homePage.uploadButton().should('to.have.length.of', 1)
  })

  it('Click on upload button and make sure that the modal comes up. with submit and cancel button', () => {
    homePage.modalSubmitButton().should("not.to.exist");
    homePage.uploadButton().click();
    homePage.modalCancelButton().focus();
    homePage.modalSubmitButton().should("to.be.visible");
    homePage.modalCancelButton().should("to.be.visible");
  })

  it('Click on upload button and make sure that ' +
      'the modal comes up. with submit and cancel button ' +
      'Click on cancel button and make sure that the modal disappears', () => {
    homePage.uploadButton().click();
    homePage.modalCancelButton().focus();
    homePage.modalCancelButton().should("to.be.visible");
    homePage.modalCancelButton().click();
    homePage.modalCancelButton().should("not.to.exist");
  })

  it('page should have more than 10 video-tiles-link on load.', () => {
    homePage.videoTileLink().should('to.have.length.of.at.least', 10)
  })

  it('minimum video-tile\'s on page load. ' +
      'randomly pickup one of them to verify if it contains video-tile-link in parents.', () => {
    let videoTileList = homePage.videoTile();
    videoTileList.should('to.have.length.of.at.least', 10)
    videoTileList.first().click()
    homePage.viewIframe().should('to.have.length.of', 1);
  })
})

