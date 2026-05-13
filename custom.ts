
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
* https://johnvidler.co.uk/blog/makecode-block-annotations/
* https://makecode.com/defining-blocks
*
* 2026.05.06
* Found a customizable color picker in Extensions > Brightboard
* Using parts of it to add functionality
* 1) I can pre-select the colors, order, and number of colors in the color picker
* 2) I can pre-select the default color of the picker which means I can select the background color of the 8x8 image
* TODO:
* 3) Can I user-select the colors, order, and number of colors in the color picker?
* 4) Can I user-change the colors assigned to the image? 
*/




/**
 * Custom blocks
 */

enum RC_Index{ //Row and Column Index
    //% block="0"
    Zero = 0,
    //% block="1"
    One = 1,
    //% block="2"
    Two = 2,
    //% block="3"
    Three = 3,
    //% block="4"
    Four = 4,
    //% block="5"
    Five = 5,
    //% block="6"
    Six = 6,
    //% block="7"
    Seven = 7
}



//% weight=100 color=#000000 icon=""
namespace PixelBox {
    
    let img = [[0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0]];

    /**
     * Custom Color Picker
     */
    //% blockId=customColorPicker
    //% block="%value"
    //% shim=TD_ID
    //% colorSecondary="#ff0000"
    //% value.fieldEditor="colornumber"
    //% value.fieldOptions.decompileLiterals=true
    //% value.defl='#000000'
    //% weight=100
    // Color Palatte:                    Red, Magenta, Pink;              Orange, Yellow, Gold;        Dark Green, Green, Light Green;       Blue, Cyan, Teal;               Purple, Medium Purple,Lavender;        Brown, Tan, Beige;              Dark Gray, Medium Gray, Light Grey;     Black, White 
    //% value.fieldOptions.colours='["#ff0000","#ff00ff","#ffb6c1",    "#ff8000","#ffff00","#daa520",    "#008000","#00ff00","#90ee90",    "#0000ff","#00ffff","#008080",    "#4b0082","#9370db","#e6e6fa",        "#8b4513","#d2b48c","#f5deb3",   "#303030","#808080","#d0d0d0",           "#000000","#ffffff"]'
    // value.fieldOptions.colours='["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff","#ffffff","#808080","#000000"]'
    //% value.fieldOptions.columns=3 
    //% value.fieldOptions.className='rgbColorPicker' 
    export function __colorNumberPicker(value: number) {
        return value;
    }

    /**
     * Pixel Box Row
     * @param row - row number
     * @param p0 - pixel at col=0
     * @param p1 - pixel at col=1
     * @param p2 - pixel at col=2
     * @param p3 - pixel at col=3
     * @param p4 - pixel at col=4
     * @param p5 - pixel at col=5
     * @param p6 - pixel at col=6
     * @param p7 - pixel at col=7
     * 
     */
    //% block="row%row%p0%p1%p2%p3%p4%p5%p6%p7"
    //% inlineInputMode=inline
    //% weight=90
    //% p0.shadow="customColorPicker"
    //% p1.shadow="customColorPicker"
    //% p2.shadow="customColorPicker"
    //% p3.shadow="customColorPicker"
    //% p4.shadow="customColorPicker"
    //% p5.shadow="customColorPicker"
    //% p6.shadow="customColorPicker"
    //% p7.shadow="customColorPicker"
    export function pixelBoxRow(row: RC_Index, p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void {
        img[row]=[p0, p1, p2, p3, p4, p5, p6, p7];
        
        for (let r = 0; r <= 7; r++) {
            for (let c = 0; c <= 7; c++) {
                strip.setPixelColor(r * 8 + c, img[r][c])
            }
        }
    }


    /**
     * Replace Color
     * @param targetColor - The color to be replaced
     * @param replacementColor - The new color to insert
     * @param startRow - The row to start the replacement
     * @param endRow - The row to end the replacement
     * @param startCol - The column to start the replacement
     * @param endCol - The column to end the replacement
     */

    //% block="replace%targetColor with%replacementColor"
    //% inlineInputMode=inline
    //% weight = 80
    //% targetColor.shadow="customColorPicker"
    //% replacementColor.shadow="customColorPicker"
    export function replaceColor(targetColor: number, replacementColor: number): void {

        for (let r = 0; r <= 7; r++) {
            for (let c = 0; c <= 7; c++) {
                if (img[r][c] == targetColor) {
                    img[r][c] = replacementColor;
                }
            }
        }

        for (let r = 0; r <= 7; r++) {
            for (let c = 0; c <= 7; c++) {
                strip.setPixelColor(r * 8 + c, img[r][c])
            }
        }

    }


    /**
     * Replace Color Range
     * @param targetColor - The color to be replaced
     * @param replacementColor - The new color to insert
     * @param startRow - The row to start the replacement
     * @param endRow - The row to end the replacement
     * @param startCol - The column to start the replacement
     * @param endCol - The column to end the replacement
     */

    //% block="replace%targetColor with%replacementColor     Rows: %startRow to %endRow     Columns: %startCol to %endCol"
    //% inlineInputMode=inline
    //% weight = 70
    //% targetColor.shadow="customColorPicker"
    //% replacementColor.shadow="customColorPicker"
    //% endRow.defl=RC_Index.Seven
    //% endCol.defl=RC_Index.Seven
    export function replaceColorRange(targetColor: number, replacementColor: number, startRow: RC_Index, endRow: RC_Index, startCol: RC_Index, endCol: RC_Index): void {

        for (let r = startRow; r <= endRow; r++) {
            for (let c = startCol; c <= endCol; c++) {
                if (img[r][c] == targetColor) {
                    img[r][c] = replacementColor;
                }
            }
        }

        for (let r = 0; r <= 7; r++) {
            for (let c = 0; c <= 7; c++) {
                strip.setPixelColor(r * 8 + c, img[r][c]);
            }
        }

    }


    /**
     * Shift Image Right
     * @param numPixR - The number of colors to shift the image right
     */

    //% block="shift    Right%numPixR"
    //% inlineInputMode=inline
    //% weight = 60
    export function shiftImage(numPixR: number): void {

        for (let r = 0; r <= 7; r++) {
            for (let c = 7; c <= 1; c--) {
                if (c > 0) {
                    img[r][c] = img[r][c-1];
                } else {
                    img[r][c] = 0;
                }
            
            }
        }

        for (let r = 0; r <= 7; r++) {
            for (let c = 0; c <= 7; c++) {
                strip.setPixelColor(r * 8 + c, img[r][c])
            }
        }

    }


}
