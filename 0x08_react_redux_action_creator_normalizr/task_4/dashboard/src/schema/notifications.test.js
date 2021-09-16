import {
  getAllNotificationsByUser,
  normalizedData,
} from "./notifications";


describe('Test schema functions', () => {
  it('Tests whether getAllNotificationsByUser() returns the expected data', () => {
    const dataFromFunc = getAllNotificationsByUser('5debd764a7c57c7839d722e9');
    const expected = [
      {
        guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
        isRead: true,
        type: "urgent",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      },
      {
        guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
        isRead: false,
        type: "urgent",
        value:
          "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
      }
    ];
    expect(dataFromFunc).toEqual(
      expect.arrayContaining(expected)
    );
  });
  describe('Tests whether the NotificationsJSON is being normalized correctly', () => {
    it('Compares whether the results array contains the expected output', () => {
      const expected = [
        "5debd76480edafc8af244228",
        "5debd764507712e7a1307303",
        "5debd76444dd4dafea89d53b",
        "5debd76485ee4dfd1284f97b",
        "5debd7644e561e022d66e61a",
        "5debd7644aaed86c97bf9d5e",
        "5debd76413f0d5e5429c28a0",
        "5debd7642e815cd350407777",
        "5debd764c1127bc5a490a4d0",
        "5debd7646ef31e0861ec1cab",
        "5debd764a4f11eabef05a81d",
        "5debd764af0fdd1fc815ad9b",
        "5debd76468cb5b277fd125f4",
        "5debd764de9fa684468cdc0b"
      ];
      expect(normalizedData.result).toEqual(
        expect.arrayContaining(expected)
      )
    });
    it('Test to validate whether a given user_id in the users table has the expected data', () => {
      const expected = {
        age: 25,
        email: "poole.sanders@holberton.nz",
        id: "5debd764a7c57c7839d722e9",
        name: { first: "Poole", last: "Sanders" },
        picture: "http://placehold.it/32x32"
      };
      expect(
        normalizedData.entities.users['5debd764a7c57c7839d722e9']
      ).toMatchObject(expected);
    });
    it('Test to validate whether a given notifications_id in the notifications table has the expected data', () => {
      const expected = {
        author: "5debd764f8452ef92346c772",
        context: "3068c575-d619-40af-bf12-dece1ee18dd3",
        id: "5debd7642e815cd350407777"
      }
      expect(
        normalizedData.entities.notifications['5debd7642e815cd350407777']
      ).toMatchObject(expected);
    });
  });
});
