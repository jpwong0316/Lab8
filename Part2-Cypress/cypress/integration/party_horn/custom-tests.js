describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume of audio element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and sound sources change when party horn radio button selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', "./assets/media/images/party-horn.svg")
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', "./assets/media/audio/party-horn.mp3")
    });
  });

  it('Volume image changes when increasing volumes', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-0.svg");
    });
    cy.get('#volume-number').clear().type('10');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
    });
    cy.get('#volume-number').clear().type('40');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
    });
    cy.get('#volume-number').clear().type('70');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-3.svg");
    });
  });

  it('Honk button disabled when textbox input is empty or non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.prop('disabled', true);
    });
    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.prop('disabled', true);
    });
  })

  it('Error shown when number outside of range typed in volume textbox', () => {
    cy.get('#volume-number').clear().type('111');
    cy.get('#honk-btn').click();
    cy.get('input:invalid').then($el => {
      expect($el).to.have.value('111');
    });
  })

});
