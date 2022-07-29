import React, { useContext, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Boxstyle, ButtonCart } from "./StyledModalQuantity";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import GlobalStateContext from "../../global/GlobalStateContext";

const ModalQuantity = ({ open, handleClose, onClick, value, onChange }) => {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Boxstyle>
                    <h1>Selecione a quantidade desejada</h1>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
                            onChange={(e) =>onChange(Number(e.target.value))}
                        >
                            {Array(10).fill('').map((_,i) => (
                                <MenuItem key={i} value={i+1}>{i+1}</MenuItem>
                            ))}
                            {/* <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem> */}
                        </Select>
                    </FormControl>
                    <ButtonCart onClick={onClick}>
                        ADICIONAR AO CARRINHO
                    </ButtonCart>
                </Boxstyle>
            </Modal>
        </div>
    );
};

export default ModalQuantity;
