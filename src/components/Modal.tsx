import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { FaInfoCircle } from "react-icons/fa";
import { Trans } from "@lingui/react/macro";

const style = {
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "86%",
  maxWidth: 400,
  boxShadow: 24,
  p: 2,
};

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TransitionsModal({ open, onClose }: Props) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open} className="bg-primary-light text-terciary">
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            className="flex items-center gap-3"
          >
            <FaInfoCircle /> <Trans>Mobile Device Detected</Trans>
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <Trans>
              I strongly recommend to use a device whith a larger screen
            </Trans>
            .
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}
