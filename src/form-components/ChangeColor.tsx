import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    const colors = [
        "red",
        "blue",
        "green",
        "purple",
        "orange",
        "pink",
        "brown",
        "yellow"
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((col: string) => (
                <Form.Check
                    inline
                    type="radio"
                    onChange={updateColor}
                    id="color-id"
                    key={col}
                    label={col}
                    value={col}
                    checked={color === col}
                />
            ))}
            <div>
                You chose{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: color,
                        color: "white"
                    }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
