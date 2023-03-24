/* eslint-disable no-console */
import { Tooltip } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Box, IconButton } from "@mui/material"
import axios from "axios"
import { FC, useState } from "react"
import { toast } from "react-toastify"
// import { ToastContainer, toast } from "react-toastify"
import { useAppProvider } from "@appProvider/AppProvider"
import { useUndoable } from "@appProvider/UndoableProvider"
import "react-toastify/dist/ReactToastify.css"

import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import Edit from "../icons/Edit"
import PreviewIcon from "../icons/PreviewIcon"
import RedoIcon from "../icons/Redo"
import SaveIcon from "../icons/SaveIcon"
import UndoIcon from "../icons/UndoIcon"
import ZoomIn from "../icons/ZoomIn"
import ZoomOut from "../icons/ZoomOut"
import UndoCustomization from "./UndoCustomization"

const useStyles = makeStyles(
  (theme) => ({
    input: {
      height: "fit-content",
      border: "none !important",
      minWidth: "94px",
      maxWidth: "94px",
      width: "94px"
    },
    thinArrow: {
      width: "1px",
      height: "20px",
      backgroundColor: "lightgray"
    },
    root: {
      outline: "none",
      border: "none !important",
      maxWidth: "94px",
      "&& fieldset": {
        outline: "none",
        border: "none !important",
        maxWidth: "94px"
      }
    },
    shadow: {},
    shadow2: {
      padding: "5px !important"
    },
    toolBarContainer: {
      display: "flex",
      position: "relative",
      flexDirection: "row",
      justifyContent: "flex-end",
      height: "fit-content",
      paddingBottom: "15px",
      width: "100% !important",
      flexWrap: "wrap",
      alignItems: "end",
      marginBottom: "15px",
      marginTop: "15px",
      backgroundColor: "red"
    },

    rightContent: {
      display: "flex",
      flexDirection: "row",
      // alignItems: "center",
      width: "60%",
      justifyContent: "flex-end",
      flexWrap: "wrap"
    },
    rightContentFullWidth: {
      display: "flex",
      flexDirection: "row",
      // alignItems: "center",
      width: "100%",
      justifyContent: "flex-end",
      flexWrap: "wrap",
      fontSize: "12px"
    },

    leftContent: {
      display: "flex",
      flexDirection: "row",

      width: "fit-content"
    },
    tag: {
      display: "flex",
      flexDirection: "row",
      fontSize: "5px",
      alignItems: "center"
    },
    icon: {
      width: "auto",
      height: 36,
      "& path": {
        fill: "#363636"
      }
    },
    IsShowSearch: {
      display: "hide"
    },
    inputSearch: {
      width: "40px",
      height: "40px",
      overflow: "hidden",
      fade: "0"
    },

    inputSearchFocus: {
      width: "200px",
      height: "40px",
      fade: "in"
    },
    textColor: {},
    sizeBtn: {
      maxWidth: "130px",
      width: "60px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingRight: "5px",
      paddingLeft: "5px",
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    sizeBtnTwin: {
      maxWidth: "130px",
      width: "60px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingRight: "5px",
      paddingLeft: "5px",
      color: theme.palette.text.primary,
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    iconColor: {
      marginTop: "3px",
      paddingTop: "1px",
      width: "1.8rem",
      height: "1.8rem",
      color: theme.palette.text.primary,
      "&:hover": {
        color: theme.palette.primary.main
      }
    },
    tooltip: {
      backgroundColor: "white",
      color: "#000",
      boxShadow: theme.shadows[1],
      padding: "5px 10px",
      fontSize: "12px"
    },
    arrow: {
      color: "white"
    }
  }),
  { name: "CustomEditorToolbar" }
)
interface CustomEditorToolbarProps {
  onClickGroup?: any
  style?: any
  onChangeEvent?: any
}
const CustomEditorToolbar: FC<CustomEditorToolbarProps> = ({
  onClickGroup,
  style,
  onChangeEvent
}: CustomEditorToolbarProps) => {
  const classes: any = useStyles(style)
  const PATH_POST_HEADER = process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/postHeader"
  const PATH_POST_UPLOAD_App = process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/uploadApp"
  const PATH_POST_MODALS = process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/postModals"
  const { setCallUndo, setIsReadOnly, headerDBFormat, zoom, setZoom, dbFormat, giftDBFormat }: any =
    useAppProvider()

  const { setDbModalsFormat, dbModalsFormat }: any = useModalsAppProvider()

  const [isSave, setIsSave] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)

  const { undo, isUndoable, content, redo, isRedoable }: any = useUndoable()

  function zoomOut() {
    let value = zoom
    value += 0.1
    setZoom(value)
    setZoomLevel(value)
    setZoomLevel(zoomLevel + 1)
    console.log("zoomLevel:::", zoomLevel)
  }
  function zoomIn() {
    let value = zoom
    value -= 0.1
    setZoom(value)
    // add one each time to zoomLevel

    setZoomLevel(zoomLevel - 1)
  }

  function previewMode() {
    setIsReadOnly(true)
  }

  function editMode() {
    setIsReadOnly(false)
  }

  UndoCustomization(content)

  const handleRedo = () => {
    redo()
    console.log("Redo function:::", content)
    setCallUndo(true)
  }

  const handleUndo = () => {
    undo()
    setCallUndo(content)
    setCallUndo(true)
    console.log("Undo function:::", content)
  }
  // save function
  // save locally for test
  const saveLocally = async () => {
    const headerBody = {  file: headerDBFormat }
    const modalsBody = { file: dbModalsFormat }
    console.log("save locally::", dbFormat, giftDBFormat, headerDBFormat)
    const [header, gift] = await Promise.all([
      fetch(PATH_POST_HEADER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(headerBody)
      }).then((res) => {
        if (res.status === 200) {
          setIsSave(true)
          return res.json()
        }
      }),
      fetch(PATH_POST_MODALS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(modalsBody)
      }).then((res) => {
        if (res.status === 200) {
          setIsSave(true)
          return res.json()
        }
      })
    ])
    console.log("save for header", header)
    console.log("save for dbModalsFormat >>> ", dbModalsFormat)
  }

  const callSave = async () => {
    const [header] = await Promise.all([
      await axios
        .post(
          `/api/uploadApp`,
          {
            name: "container.json",
            file: JSON.stringify(headerDBFormat)
          },
          { headers: { "Content-Type": "application/json" } }
        )

        .then((res) => {
          if (res.status === 200) {
            setIsSave(true)
          }
        })
        .catch((error) => {
          // Check if it's HTTP 400  error
          if (error.response.status === 400) {
            console.log(`HTTP 400 error occured for first request`)
          }
          // You can get response data (mostly the reason would be in it)
          if (error.response.data) {
            console.log(" first request", error.response.data)
          }
        })
    ])

    console.log("save file: ", header)


    if (isSave) {
      toast.success("Changes Saved Successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      })
    }
  }
  return (
    <Box
      className="editorToolbar"
      sx={{
        flexGrow: 1,
        display: "flex",
        height: "auto",
        width: "100%"
      }}
    >
      <Box
        // className={classes.toolBarContainer}
        sx={{
          flexGrow: 1,
          bgcolor: "transparent",
          display: "flex",
          height: "auto",
          width: "100%",
          justifyContent: "flex-end",
          flexWrap: "wrap",
          marginBottom: "15px",
          marginTop: "15px"
        }}
      >
        <Box
          className={`toolbox ${classes.shadow}`}
          style={{
            padding: "8px",
            // backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Tooltip
            title="Zoom In"
            placement="top"
            arrow
            classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
          >
            <IconButton
              className={`toolbox-button btn-info ${classes.sizeBtnTwin}`}
              sx={{
                margin: "4px",
                maxWidth: "100px",
                width: "40px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
              onClick={() => zoomIn()}
              disabled={zoomLevel === 0}
            >
              {" "}
              <ZoomIn className={classes.iconColor} style={{ width: "25px", height: "25px" }} />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Zoom Out"
            placement="top"
            arrow
            classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
          >
            <IconButton
              className={`toolbox-button btn-info ${classes.sizeBtnTwin}`}
              sx={{
                margin: "4px",
                maxWidth: "100px",
                width: "40px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
              onClick={() => zoomOut()}
              disabled={zoomLevel === 1}
            >
              <ZoomOut className={classes.iconColor} style={{ width: "25px", height: "25px" }} />
            </IconButton>
          </Tooltip>
          <span className={classes.thinArrow} />

          <Tooltip
            title="Redo"
            placement="top"
            arrow
            classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
          >
            <span>
              <IconButton
                className={`toolbox-button btn-info ${classes.sizeBtn}`}
                sx={{
                  margin: "4px",
                  maxWidth: "130px",
                  width: "50px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                disabled={!isRedoable}
                onClick={() => {
                  handleRedo()
                }}
              >
                <RedoIcon className={classes.iconColor} style={{ width: "25px", height: "25px" }} />
              </IconButton>
            </span>
          </Tooltip>

          <Tooltip
            title="Undo"
            placement="top"
            arrow
            classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
          >
            <span>
              <IconButton
                className={`toolbox-button btn-info ${classes.sizeBtn}`}
                sx={{
                  margin: "4px",
                  maxWidth: "130px",
                  width: "50px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              
                disabled={!isUndoable}
                onClick={handleUndo}
              >
                <UndoIcon className={classes.iconColor} style={{ width: "25px", height: "25px" }} />
              </IconButton>
            </span>
          </Tooltip>
          <span className={classes.thinArrow} />
          <Tooltip
            title="Edit Mode"
            placement="top"
            arrow
            classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
          >
            <IconButton
              id="demo-customized-schedule-option-filter"
              className={`toolbox-button btn-info ${classes.sizeBtn}`}
              onClick={editMode}
              sx={{
                margin: "4px",
                maxWidth: "130px",
                width: "70px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Edit className={classes.iconColor} style={{ width: "23px", height: "23px" }} />
            </IconButton>
          </Tooltip>
          <span className={classes.thinArrow} />
          <Tooltip
            title="Save changes"
            placement="top"
            arrow
            classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
          >
            <IconButton
              className={`toolbox-button btn-info ${classes.sizeBtn}`}
              sx={{
                margin: "4px",
                maxWidth: "130px",
                width: "70px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
              // onClick={callSave}
              onClick={saveLocally}
            >
              <SaveIcon className={classes.iconColor} style={{ width: "25px", height: "25px" }} />
            </IconButton>
          </Tooltip>
          <span className={classes.thinArrow} />
          <Tooltip
            title="Previews(Read Only)"
            placement="top"
            arrow
            classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
          >
            <IconButton
              onClick={previewMode}
              className={`toolbox-button btn-info ${classes.sizeBtn}`}
              sx={{
                margin: "4px",
                maxWidth: "130px",
                width: "70px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <PreviewIcon
                className={classes.iconColor}
                style={{ width: "25px", height: "25px" }}
              />
            </IconButton>
          </Tooltip>
          
        </Box>
      </Box>
    </Box>
  )
}

export default CustomEditorToolbar
