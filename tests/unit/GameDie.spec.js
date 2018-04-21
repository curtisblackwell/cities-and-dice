import { assert }  from 'chai';
import { shallow } from '@vue/test-utils';
import GameDie     from '@/components/GameDie.vue';

describe('GameDie.vue', () => {
  it('allows you to specify sides', () => {
    // Arrange
    // Prep sides and create die.
    const sides   = [1, 2, 3];
    const wrapper = shallow(GameDie, {
      propsData: { sides },
    });

    // Act
    // Get sides.
    const totalSides = wrapper.findAll('.game-die-side');

    // Assert
    // Ensure expected number of sides rendered.
    assert.equal(totalSides.length, 3);
  });




  it('defaults to a six-sided die', () => {
    // Arrange
    // Create die.
    const wrapper = shallow(GameDie);

    // Act
    // Get sides.
    const totalSides = wrapper.findAll('.game-die-side');

    // Assert
    // Ensure expected number of sides rendered.
    assert.equal(totalSides.length, 6);
  });




  it('displays one side at a time', () => {
    // Arrange
    // Prep sides and create die.
    const sides   = [1, 2, 3];
    const wrapper = shallow(GameDie, {
      propsData: { sides },
    });

    // Act
    // Get visible sides.
    const visibleSides = wrapper
      .findAll('.game-die-side')
      .filter(side => side.isVisible());

    // Assert
    // Ensure only one side visible.
    assert.equal(visibleSides.length, 1);
  });
});
