import pool from "../config/config";

export const createBank = async (
  name: string,
  address: string,
  pincode: string,
  branchCode: string
) => {
  const [result]: any = await pool.query(
    `INSERT INTO banks (name, address, pincode, branchCode) VALUES (?, ?, ?, ?)`,
    [name, address, pincode, branchCode]
  );

  return {
    id: result.insertId,
    name,
    address,
    pincode,
    branchCode,
  };
};
