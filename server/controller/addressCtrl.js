const Address=require('../model/addressSchema');
// Create a new address
const createAddress = async (req, res) => {
  try {    const { userId, street, city, state, zip } = req.body;
    const newAddress = new Address({ userId, street, city, state, zip });
    await newAddress.save();
    res.status(201).json({ message: 'Address created successfully', address: newAddress });
  } catch (error) {
    res.status(500).json({ message: 'Error creating address', error });
  } };

// Get all addresses
const getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching addresses', error });
  } };

// Get an address by ID
const getAddressById = async (req, res) => {
    try {
        const address=await Address.findById(req.params.id);
        if(!address){
            return res.status(404).json({message:'Address not found'});
        }
        res.status(200).json(address);
    } catch (error) {
        res.status(500).json({message:'Error fetching address',error});
    } };

module.exports={createAddress,getAddressById,getAllAddresses};