import Text "mo:core/Text";
import Nat "mo:core/Nat";

actor {
  type Product = {
    name : Text;
    price : Nat;
    currency : Text;
  };

  let product : Product = {
    name = "RADIANTÈ Ultra Glow Sunscreen";
    price = 499;
    currency = "INR";
  };

  public query ({ caller }) func getProduct() : async Product {
    product;
  };
};
